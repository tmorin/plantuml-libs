# MinusSquare


```text
fontawesome/Solid/MinusSquare
```

```text
include('fontawesome/Solid/MinusSquare')
```



| Illustration | MinusSquare |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/MinusSquare.png) | ![illustration for MinusSquare](../../fontawesome/Solid/MinusSquare.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$MinusSquareXs>`
- `<$MinusSquareSm>`
- `<$MinusSquareMd>`
- `<$MinusSquareLg>`





## MinusSquare

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element MinusSquare
include('fontawesome/Solid/MinusSquare')

' renders the element
MinusSquare('MinusSquare', 'Minus Square', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element MinusSquare
include('fontawesome/Solid/MinusSquare')

' renders the element
MinusSquare('MinusSquare', 'Minus Square', 'an optional tech label', 'an optional description')
@enduml
```

