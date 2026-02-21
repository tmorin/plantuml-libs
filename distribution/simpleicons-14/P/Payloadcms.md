# Payloadcms


```text
simpleicons-14/P/Payloadcms
```

```text
include('simpleicons-14/P/Payloadcms')
```



| Illustration | Payloadcms |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/P/Payloadcms.png) | ![illustration for Payloadcms](../../simpleicons-14/P/Payloadcms.Local.png) |



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
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Payloadcms
include('simpleicons-14/P/Payloadcms')

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
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Payloadcms
include('simpleicons-14/P/Payloadcms')

' renders the element
Payloadcms('Payloadcms', 'Payloadcms', 'an optional tech label', 'an optional description')
@enduml
```

