# Libreoffice


```text
simpleicons-5/L/Libreoffice
```

```text
include('simpleicons-5/L/Libreoffice')
```



| Illustration | Libreoffice |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/L/Libreoffice.png) | ![illustration for Libreoffice](../../simpleicons-5/L/Libreoffice.Local.png) |




## Libreoffice

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Libreoffice
include('simpleicons-5/L/Libreoffice')

' renders the element
Libreoffice('Libreoffice', 'Libreoffice', 'an optional tech label')
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

' loads the Item which embeds the element Libreoffice
include('simpleicons-5/L/Libreoffice')

' renders the element
Libreoffice('Libreoffice', 'Libreoffice', 'an optional tech label')
@enduml
```

