# Viadeo


```text
simpleicons-5/V/Viadeo
```

```text
include('simpleicons-5/V/Viadeo')
```



| Illustration | Viadeo |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/V/Viadeo.png) | ![illustration for Viadeo](../../simpleicons-5/V/Viadeo.Local.png) |




## Viadeo

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Viadeo
include('simpleicons-5/V/Viadeo')

' renders the element
Viadeo('Viadeo', 'Viadeo', 'an optional tech label')
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

' loads the Item which embeds the element Viadeo
include('simpleicons-5/V/Viadeo')

' renders the element
Viadeo('Viadeo', 'Viadeo', 'an optional tech label')
@enduml
```

