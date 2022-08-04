# VimeoV


```text
fontawesome-6/Brands/VimeoV
```

```text
include('fontawesome-6/Brands/VimeoV')
```



| Illustration | VimeoV |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Brands/VimeoV.png) | ![illustration for VimeoV](../../fontawesome-6/Brands/VimeoV.Local.png) |




## VimeoV

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element VimeoV
include('fontawesome-6/Brands/VimeoV')

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
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element VimeoV
include('fontawesome-6/Brands/VimeoV')

' renders the element
VimeoV('VimeoV', 'Vimeo V', 'an optional tech label', 'an optional description')
@enduml
```

