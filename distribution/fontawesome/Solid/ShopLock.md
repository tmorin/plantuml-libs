# ShopLock


```text
fontawesome/Solid/ShopLock
```

```text
include('fontawesome/Solid/ShopLock')
```



| Illustration | ShopLock |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/ShopLock.png) | ![illustration for ShopLock](../../fontawesome/Solid/ShopLock.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ShopLockXs>`
- `<$ShopLockSm>`
- `<$ShopLockMd>`
- `<$ShopLockLg>`





## ShopLock

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element ShopLock
include('fontawesome/Solid/ShopLock')

' renders the element
ShopLock('ShopLock', 'Shop Lock', 'an optional tech label', 'an optional description')
@enduml
```

### Load locally
```plantuml
@startuml
' configures the library
!global $INCLUSION_MODE="local"
!global $LIB_BASE_LOCATION="../.."

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element ShopLock
include('fontawesome/Solid/ShopLock')

' renders the element
ShopLock('ShopLock', 'Shop Lock', 'an optional tech label', 'an optional description')
@enduml
```

