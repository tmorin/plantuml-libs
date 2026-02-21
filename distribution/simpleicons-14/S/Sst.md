# Sst


```text
simpleicons-14/S/Sst
```

```text
include('simpleicons-14/S/Sst')
```



| Illustration | Sst |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/S/Sst.png) | ![illustration for Sst](../../simpleicons-14/S/Sst.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$SstXs>`
- `<$SstSm>`
- `<$SstMd>`
- `<$SstLg>`





## Sst

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Sst
include('simpleicons-14/S/Sst')

' renders the element
Sst('Sst', 'Sst', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Sst
include('simpleicons-14/S/Sst')

' renders the element
Sst('Sst', 'Sst', 'an optional tech label', 'an optional description')
@enduml
```

