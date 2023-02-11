# Pelican


```text
simpleicons-8/P/Pelican
```

```text
include('simpleicons-8/P/Pelican')
```



| Illustration | Pelican |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/P/Pelican.png) | ![illustration for Pelican](../../simpleicons-8/P/Pelican.Local.png) |




## Pelican

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Pelican
include('simpleicons-8/P/Pelican')

' renders the element
Pelican('Pelican', 'Pelican', 'an optional tech label', 'an optional description')
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
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Pelican
include('simpleicons-8/P/Pelican')

' renders the element
Pelican('Pelican', 'Pelican', 'an optional tech label', 'an optional description')
@enduml
```

