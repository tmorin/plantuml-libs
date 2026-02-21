# Ccc


```text
simpleicons-14/C/Ccc
```

```text
include('simpleicons-14/C/Ccc')
```



| Illustration | Ccc |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/C/Ccc.png) | ![illustration for Ccc](../../simpleicons-14/C/Ccc.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$CccXs>`
- `<$CccSm>`
- `<$CccMd>`
- `<$CccLg>`





## Ccc

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Ccc
include('simpleicons-14/C/Ccc')

' renders the element
Ccc('Ccc', 'Ccc', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Ccc
include('simpleicons-14/C/Ccc')

' renders the element
Ccc('Ccc', 'Ccc', 'an optional tech label', 'an optional description')
@enduml
```

