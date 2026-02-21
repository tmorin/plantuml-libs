# Payloadcms


```text
simpleicons/P/Payloadcms
```

```text
include('simpleicons/P/Payloadcms')
```



| Illustration | Payloadcms |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/P/Payloadcms.png) | ![illustration for Payloadcms](../../simpleicons/P/Payloadcms.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$PayloadcmsXs>`
- `<$PayloadcmsSm>`
- `<$PayloadcmsMd>`
- `<$PayloadcmsLg>`





## Payloadcms

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Payloadcms
include('simpleicons/P/Payloadcms')

' renders the element
Payloadcms('Payloadcms', 'Payloadcms', 'an optional tech label', 'an optional description')
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
include('simpleicons/bootstrap')

' loads the Item which embeds the element Payloadcms
include('simpleicons/P/Payloadcms')

' renders the element
Payloadcms('Payloadcms', 'Payloadcms', 'an optional tech label', 'an optional description')
@enduml
```

