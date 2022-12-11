import React, { useState, useEffect, useContext } from 'react'
import { Container, ProductsHeader, Content, ListSummary, TableTd, Button, DiscountCoupon} from "./style";
import { ProductListItem } from '../ProductListItem'
import { ProductType } from '../../types/productType';
import { Context } from '../../Context/context';
import { Coupon } from '../../types/couponType';

export function SelectProducts(){
    const { coupons } = useContext(Context);

    const [localStorageItems, setLocalStorageItems] = useState<ProductType[]>([]);
    const [usedCoupon, setUsedCoupons] = useState<Coupon>();
    const [amount, setAmount] = useState<number>(0);
    const [amountWithDiscount, setAmountWithDiscount] = useState<number>(0);
    const [discountCoupon, setDiscountCoupon] = useState<string>("");
    const [invalidCoupons, setInvalidCoupons] = useState<string>("");
    
    useEffect(() => {
        const itemsFromLocalStorage:ProductType[] = JSON.parse(localStorage.getItem('products') || '[]');
        localStorage.setItem("coupons", JSON.stringify([]));
        setLocalStorageItems(itemsFromLocalStorage)
    }, []);

    useEffect(() => {
        calculateAmount(localStorageItems);
    }, [usedCoupon, localStorageItems])

    const handleRemoveSelectItem = (idItem: number) => {
        let itemsFromLocalStorage:ProductType[] = JSON.parse(localStorage.getItem('products') || '[]');

        for(let i = 0; i < itemsFromLocalStorage.length; i++){
            if(itemsFromLocalStorage[i].id === idItem){
                itemsFromLocalStorage.splice(i, 1);
            }
        }
        
        localStorage.setItem("products", JSON.stringify(itemsFromLocalStorage));
        setLocalStorageItems(itemsFromLocalStorage);
    }

    function handleQuantity(idItem: number, type:number) {
        let itemsFromLocalStorage:ProductType[] = JSON.parse(localStorage.getItem('products') || '[]');
    
        for(let i:number = 0; i < itemsFromLocalStorage.length; i++) {
          if(itemsFromLocalStorage[i].id === idItem && parseInt(itemsFromLocalStorage[i].quantity) > type){
            let CurrentQuantity:number = parseInt(itemsFromLocalStorage[i].quantity) + (type === 1 ?-1:1);
            
            itemsFromLocalStorage[i].quantity = ""+CurrentQuantity;
            localStorage.setItem("products", JSON.stringify(itemsFromLocalStorage));
            setLocalStorageItems(itemsFromLocalStorage)
          }
        }  
    }  

    function handleDiscountCoupon() {
        const InputCoupon:Coupon | undefined = coupons.find(item => item.cod === discountCoupon);
        
        if(InputCoupon && amount <= InputCoupon.value){
            setInvalidCoupons("O cupon não se aplica há esse valor");
        }else if(!InputCoupon){
            setInvalidCoupons("Cupom inválido")
        }else if(usedCoupon){
            setInvalidCoupons("Você já utilizou um cupom nesse carrinho");
        }else if(InputCoupon && amount >= InputCoupon.value && !usedCoupon){
            setUsedCoupons(InputCoupon);
            setInvalidCoupons("");
        }
    }

    const calculateAmount = (itemsFromLocalStorage:ProductType[]) =>{
        let total:number = 0;

        itemsFromLocalStorage.forEach((item)=>{
            total += item.price * parseInt(item.quantity);
        })

        if(usedCoupon){
            const discountPercentage:number = usedCoupon.percentage;

            setAmountWithDiscount(total * (1 - discountPercentage / 100));
        }else{
            setAmountWithDiscount(total);
        }
        setAmount(total);
    }

    return(
        <Container>
            <ProductsHeader>
                <h2>Meu carrinho de compras</h2>
            </ProductsHeader>
            <Content>
                {localStorageItems.length === 0
                ?   <>
                        <h3>Seu carrinho está vazio</h3>
                        <h4>Adicione já os produtos!</h4>
                    </>
                :   <>
                        {localStorageItems.map((productItem) => (
                            <ProductListItem 
                                key={productItem.id}
                                productItem={productItem}
                                onRemoveItem={handleRemoveSelectItem}
                                onChangeQuantity={handleQuantity}
                            />
                        ))}
                        <ListSummary>
                            <div>
                                <table>
                                    <tbody>
                                        <tr>
                                            <TableTd textAlign="left">Subtotal</TableTd>
                                            <TableTd textAlign="right">
                                                {new Intl.NumberFormat('pt-BR', {
                                                    style: 'currency',
                                                    currency: 'BRL'
                                                }).format(amount)}
                                            </TableTd>
                                        </tr>
                                        
                                        {usedCoupon && <tr>
                                            <TableTd color="#0f0" textAlign="left">{usedCoupon.name}</TableTd>
                                            <TableTd color="#0f0" textAlign="right">
                                                -{new Intl.NumberFormat('pt-BR', {
                                                    style: 'currency',
                                                    currency: 'BRL'
                                                }).format(amount - amountWithDiscount)}</TableTd>
                                        </tr>}
                                        <tr>
                                            <TableTd size="1.5rem" textAlign="left">Total</TableTd>
                                            <TableTd size="1.5rem" textAlign="right">
                                                {new Intl.NumberFormat('pt-BR', {
                                                    style: 'currency',
                                                    currency: 'BRL'
                                                }).format(amountWithDiscount)}
                                            </TableTd>
                                        </tr>
                                    </tbody>
                                </table>     
                                <DiscountCoupon>
                                    <input value={discountCoupon.toUpperCase()} onChange={(event)=>setDiscountCoupon(event.target.value)} type="text" placeholder="Insira um cupom de desconto" />
                                    <Button onClick={()=>handleDiscountCoupon()}>+</Button>
                                </DiscountCoupon>        
                                {invalidCoupons !== "" && <p>{invalidCoupons}</p>}  
                            </div>
                        </ListSummary>
                    </>
                } 
                
            </Content>
        </Container>
    )
}