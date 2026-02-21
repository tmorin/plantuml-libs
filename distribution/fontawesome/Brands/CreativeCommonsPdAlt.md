# CreativeCommonsPdAlt


```text
fontawesome/Brands/CreativeCommonsPdAlt
```

```text
include('fontawesome/Brands/CreativeCommonsPdAlt')
```



| Illustration | CreativeCommonsPdAlt |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Brands/CreativeCommonsPdAlt.png) | ![illustration for CreativeCommonsPdAlt](../../fontawesome/Brands/CreativeCommonsPdAlt.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$CreativeCommonsPdAltXs>`
- `<$CreativeCommonsPdAltSm>`
- `<$CreativeCommonsPdAltMd>`
- `<$CreativeCommonsPdAltLg>`





## CreativeCommonsPdAlt

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element CreativeCommonsPdAlt
include('fontawesome/Brands/CreativeCommonsPdAlt')

' renders the element
CreativeCommonsPdAlt('CreativeCommonsPdAlt', 'Creative Commons Pd Alt', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element CreativeCommonsPdAlt
include('fontawesome/Brands/CreativeCommonsPdAlt')

' renders the element
CreativeCommonsPdAlt('CreativeCommonsPdAlt', 'Creative Commons Pd Alt', 'an optional tech label', 'an optional description')
@enduml
```

