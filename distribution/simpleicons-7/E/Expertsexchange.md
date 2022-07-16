# Expertsexchange


```text
simpleicons-7/E/Expertsexchange
```

```text
include('simpleicons-7/E/Expertsexchange')
```



| Illustration | Expertsexchange |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/E/Expertsexchange.png) | ![illustration for Expertsexchange](../../simpleicons-7/E/Expertsexchange.Local.png) |




## Expertsexchange

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Expertsexchange
include('simpleicons-7/E/Expertsexchange')

' renders the element
Expertsexchange('Expertsexchange', 'Expertsexchange', 'an optional tech label')
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
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Expertsexchange
include('simpleicons-7/E/Expertsexchange')

' renders the element
Expertsexchange('Expertsexchange', 'Expertsexchange', 'an optional tech label')
@enduml
```

