# Fastapi


```text
simpleicons-14/F/Fastapi
```

```text
include('simpleicons-14/F/Fastapi')
```



| Illustration | Fastapi |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/F/Fastapi.png) | ![illustration for Fastapi](../../simpleicons-14/F/Fastapi.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$FastapiXs>`
- `<$FastapiSm>`
- `<$FastapiMd>`
- `<$FastapiLg>`





## Fastapi

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Fastapi
include('simpleicons-14/F/Fastapi')

' renders the element
Fastapi('Fastapi', 'Fastapi', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Fastapi
include('simpleicons-14/F/Fastapi')

' renders the element
Fastapi('Fastapi', 'Fastapi', 'an optional tech label', 'an optional description')
@enduml
```

