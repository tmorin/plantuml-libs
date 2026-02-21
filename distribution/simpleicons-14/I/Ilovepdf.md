# Ilovepdf


```text
simpleicons-14/I/Ilovepdf
```

```text
include('simpleicons-14/I/Ilovepdf')
```



| Illustration | Ilovepdf |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/I/Ilovepdf.png) | ![illustration for Ilovepdf](../../simpleicons-14/I/Ilovepdf.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$IlovepdfXs>`
- `<$IlovepdfSm>`
- `<$IlovepdfMd>`
- `<$IlovepdfLg>`





## Ilovepdf

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Ilovepdf
include('simpleicons-14/I/Ilovepdf')

' renders the element
Ilovepdf('Ilovepdf', 'Ilovepdf', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Ilovepdf
include('simpleicons-14/I/Ilovepdf')

' renders the element
Ilovepdf('Ilovepdf', 'Ilovepdf', 'an optional tech label', 'an optional description')
@enduml
```

