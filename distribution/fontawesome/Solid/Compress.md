# Compress


```text
fontawesome/Solid/Compress
```

```text
include('fontawesome/Solid/Compress')
```



| Illustration | Compress |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/Compress.png) | ![illustration for Compress](../../fontawesome/Solid/Compress.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$CompressXs>`
- `<$CompressSm>`
- `<$CompressMd>`
- `<$CompressLg>`





## Compress

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Compress
include('fontawesome/Solid/Compress')

' renders the element
Compress('Compress', 'Compress', 'an optional tech label', 'an optional description')
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
include('fontawesome/bootstrap')

' loads the Item which embeds the element Compress
include('fontawesome/Solid/Compress')

' renders the element
Compress('Compress', 'Compress', 'an optional tech label', 'an optional description')
@enduml
```

