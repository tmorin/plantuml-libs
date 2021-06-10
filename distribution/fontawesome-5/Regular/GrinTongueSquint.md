# GrinTongueSquint


```text
fontawesome-5/Regular/GrinTongueSquint
```

```text
include('fontawesome-5/Regular/GrinTongueSquint')
```



| Illustration | GrinTongueSquint |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Regular/GrinTongueSquint.png) | ![illustration for GrinTongueSquint](../../fontawesome-5/Regular/GrinTongueSquint.Local.png) |




## GrinTongueSquint

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element GrinTongueSquint
include('fontawesome-5/Regular/GrinTongueSquint')

' renders the element
GrinTongueSquint('GrinTongueSquint', 'Grin Tongue Squint', 'an optional tech label')
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

' loads the Item which embeds the element GrinTongueSquint
include('fontawesome-5/Regular/GrinTongueSquint')

' renders the element
GrinTongueSquint('GrinTongueSquint', 'Grin Tongue Squint', 'an optional tech label')
@enduml
```

