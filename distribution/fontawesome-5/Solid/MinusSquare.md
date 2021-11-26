# MinusSquare


```text
fontawesome-5/Solid/MinusSquare
```

```text
include('fontawesome-5/Solid/MinusSquare')
```



| Illustration | MinusSquare |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/MinusSquare.png) | ![illustration for MinusSquare](../../fontawesome-5/Solid/MinusSquare.Local.png) |




## MinusSquare

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element MinusSquare
include('fontawesome-5/Solid/MinusSquare')

' renders the element
MinusSquare('MinusSquare', 'Minus Square', 'an optional tech label')
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
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element MinusSquare
include('fontawesome-5/Solid/MinusSquare')

' renders the element
MinusSquare('MinusSquare', 'Minus Square', 'an optional tech label')
@enduml
```

