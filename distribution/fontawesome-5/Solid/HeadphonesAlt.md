# HeadphonesAlt


```text
fontawesome-5/Solid/HeadphonesAlt
```

```text
include('fontawesome-5/Solid/HeadphonesAlt')
```



| Illustration | HeadphonesAlt |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/HeadphonesAlt.png) | ![illustration for HeadphonesAlt](../../fontawesome-5/Solid/HeadphonesAlt.Local.png) |




## HeadphonesAlt

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element HeadphonesAlt
include('fontawesome-5/Solid/HeadphonesAlt')

' renders the element
HeadphonesAlt('HeadphonesAlt', 'Headphones Alt', 'an optional tech label')
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

' loads the Item which embeds the element HeadphonesAlt
include('fontawesome-5/Solid/HeadphonesAlt')

' renders the element
HeadphonesAlt('HeadphonesAlt', 'Headphones Alt', 'an optional tech label')
@enduml
```

