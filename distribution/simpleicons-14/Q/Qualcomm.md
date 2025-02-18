# Qualcomm


```text
simpleicons-14/Q/Qualcomm
```

```text
include('simpleicons-14/Q/Qualcomm')
```



| Illustration | Qualcomm |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/Q/Qualcomm.png) | ![illustration for Qualcomm](../../simpleicons-14/Q/Qualcomm.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$QualcommXs>`
- `<$QualcommSm>`
- `<$QualcommMd>`
- `<$QualcommLg>`





## Qualcomm

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Qualcomm
include('simpleicons-14/Q/Qualcomm')

' renders the element
Qualcomm('Qualcomm', 'Qualcomm', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Qualcomm
include('simpleicons-14/Q/Qualcomm')

' renders the element
Qualcomm('Qualcomm', 'Qualcomm', 'an optional tech label', 'an optional description')
@enduml
```

