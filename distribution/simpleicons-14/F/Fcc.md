# Fcc


```text
simpleicons-14/F/Fcc
```

```text
include('simpleicons-14/F/Fcc')
```



| Illustration | Fcc |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/F/Fcc.png) | ![illustration for Fcc](../../simpleicons-14/F/Fcc.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$FccXs>`
- `<$FccSm>`
- `<$FccMd>`
- `<$FccLg>`





## Fcc

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Fcc
include('simpleicons-14/F/Fcc')

' renders the element
Fcc('Fcc', 'Fcc', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Fcc
include('simpleicons-14/F/Fcc')

' renders the element
Fcc('Fcc', 'Fcc', 'an optional tech label', 'an optional description')
@enduml
```

