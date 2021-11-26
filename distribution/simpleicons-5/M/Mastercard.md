# Mastercard


```text
simpleicons-5/M/Mastercard
```

```text
include('simpleicons-5/M/Mastercard')
```



| Illustration | Mastercard |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/M/Mastercard.png) | ![illustration for Mastercard](../../simpleicons-5/M/Mastercard.Local.png) |




## Mastercard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Mastercard
include('simpleicons-5/M/Mastercard')

' renders the element
Mastercard('Mastercard', 'Mastercard', 'an optional tech label')
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
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Mastercard
include('simpleicons-5/M/Mastercard')

' renders the element
Mastercard('Mastercard', 'Mastercard', 'an optional tech label')
@enduml
```

