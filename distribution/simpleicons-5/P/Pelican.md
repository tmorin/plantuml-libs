# Pelican


```text
simpleicons-5/P/Pelican
```

```text
include('simpleicons-5/P/Pelican')
```



| Illustration | Pelican |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/P/Pelican.png) | ![illustration for Pelican](../../simpleicons-5/P/Pelican.Local.png) |




## Pelican

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Pelican
include('simpleicons-5/P/Pelican')

' renders the element
Pelican('Pelican', 'Pelican', 'an optional tech label')
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

' loads the Item which embeds the element Pelican
include('simpleicons-5/P/Pelican')

' renders the element
Pelican('Pelican', 'Pelican', 'an optional tech label')
@enduml
```

