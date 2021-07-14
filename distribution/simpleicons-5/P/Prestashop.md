# Prestashop


```text
simpleicons-5/P/Prestashop
```

```text
include('simpleicons-5/P/Prestashop')
```



| Illustration | Prestashop |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/P/Prestashop.png) | ![illustration for Prestashop](../../simpleicons-5/P/Prestashop.Local.png) |




## Prestashop

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Prestashop
include('simpleicons-5/P/Prestashop')

' renders the element
Prestashop('Prestashop', 'Prestashop', 'an optional tech label')
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

' loads the Item which embeds the element Prestashop
include('simpleicons-5/P/Prestashop')

' renders the element
Prestashop('Prestashop', 'Prestashop', 'an optional tech label')
@enduml
```

