# VimeoV


```text
fontawesome-5/Brands/VimeoV
```

```text
include('fontawesome-5/Brands/VimeoV')
```



| Illustration | VimeoV |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Brands/VimeoV.png) | ![illustration for VimeoV](../../fontawesome-5/Brands/VimeoV.Local.png) |




## VimeoV

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element VimeoV
include('fontawesome-5/Brands/VimeoV')

' renders the element
VimeoV('VimeoV', 'Vimeo V', 'an optional tech label')
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
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element VimeoV
include('fontawesome-5/Brands/VimeoV')

' renders the element
VimeoV('VimeoV', 'Vimeo V', 'an optional tech label')
@enduml
```

