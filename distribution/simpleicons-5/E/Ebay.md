# Ebay


```text
simpleicons-5/E/Ebay
```

```text
include('simpleicons-5/E/Ebay')
```



| Illustration | Ebay |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/E/Ebay.png) | ![illustration for Ebay](../../simpleicons-5/E/Ebay.Local.png) |




## Ebay

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Ebay
include('simpleicons-5/E/Ebay')

' renders the element
Ebay('Ebay', 'Ebay', 'an optional tech label')
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

' loads the Item which embeds the element Ebay
include('simpleicons-5/E/Ebay')

' renders the element
Ebay('Ebay', 'Ebay', 'an optional tech label')
@enduml
```

