# Windows


```text
fontawesome/Brands/Windows
```

```text
include('fontawesome/Brands/Windows')
```



| Illustration | Windows |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Brands/Windows.png) | ![illustration for Windows](../../fontawesome/Brands/Windows.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$WindowsXs>`
- `<$WindowsSm>`
- `<$WindowsMd>`
- `<$WindowsLg>`





## Windows

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Windows
include('fontawesome/Brands/Windows')

' renders the element
Windows('Windows', 'Windows', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Windows
include('fontawesome/Brands/Windows')

' renders the element
Windows('Windows', 'Windows', 'an optional tech label', 'an optional description')
@enduml
```

