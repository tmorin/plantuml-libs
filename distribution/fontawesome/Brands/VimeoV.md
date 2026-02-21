# VimeoV


```text
fontawesome/Brands/VimeoV
```

```text
include('fontawesome/Brands/VimeoV')
```



| Illustration | VimeoV |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Brands/VimeoV.png) | ![illustration for VimeoV](../../fontawesome/Brands/VimeoV.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$VimeoVXs>`
- `<$VimeoVSm>`
- `<$VimeoVMd>`
- `<$VimeoVLg>`





## VimeoV

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element VimeoV
include('fontawesome/Brands/VimeoV')

' renders the element
VimeoV('VimeoV', 'Vimeo V', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element VimeoV
include('fontawesome/Brands/VimeoV')

' renders the element
VimeoV('VimeoV', 'Vimeo V', 'an optional tech label', 'an optional description')
@enduml
```

