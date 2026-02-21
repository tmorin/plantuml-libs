# Compress


```text
material/Action/Compress
```

```text
include('material/Action/Compress')
```



| Illustration | Compress |
| :---: | :---: |
| ![illustration for Illustration](../../material/Action/Compress.png) | ![illustration for Compress](../../material/Action/Compress.Local.png) |



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
include('material/bootstrap')

' loads the Item which embeds the element Compress
include('material/Action/Compress')

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
include('material/bootstrap')

' loads the Item which embeds the element Compress
include('material/Action/Compress')

' renders the element
Compress('Compress', 'Compress', 'an optional tech label', 'an optional description')
@enduml
```

