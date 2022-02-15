# Mastercard


```text
simpleicons-6/M/Mastercard
```

```text
include('simpleicons-6/M/Mastercard')
```



| Illustration | Mastercard |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/M/Mastercard.png) | ![illustration for Mastercard](../../simpleicons-6/M/Mastercard.Local.png) |




## Mastercard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Mastercard
include('simpleicons-6/M/Mastercard')

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
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Mastercard
include('simpleicons-6/M/Mastercard')

' renders the element
Mastercard('Mastercard', 'Mastercard', 'an optional tech label')
@enduml
```

