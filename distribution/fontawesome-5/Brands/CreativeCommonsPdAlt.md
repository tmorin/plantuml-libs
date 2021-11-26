# CreativeCommonsPdAlt


```text
fontawesome-5/Brands/CreativeCommonsPdAlt
```

```text
include('fontawesome-5/Brands/CreativeCommonsPdAlt')
```



| Illustration | CreativeCommonsPdAlt |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Brands/CreativeCommonsPdAlt.png) | ![illustration for CreativeCommonsPdAlt](../../fontawesome-5/Brands/CreativeCommonsPdAlt.Local.png) |




## CreativeCommonsPdAlt

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element CreativeCommonsPdAlt
include('fontawesome-5/Brands/CreativeCommonsPdAlt')

' renders the element
CreativeCommonsPdAlt('CreativeCommonsPdAlt', 'Creative Commons Pd Alt', 'an optional tech label')
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

' loads the Item which embeds the element CreativeCommonsPdAlt
include('fontawesome-5/Brands/CreativeCommonsPdAlt')

' renders the element
CreativeCommonsPdAlt('CreativeCommonsPdAlt', 'Creative Commons Pd Alt', 'an optional tech label')
@enduml
```

