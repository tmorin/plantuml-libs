# AccessibleIcon


```text
fontawesome-6/Brands/AccessibleIcon
```

```text
include('fontawesome-6/Brands/AccessibleIcon')
```



| Illustration | AccessibleIcon |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Brands/AccessibleIcon.png) | ![illustration for AccessibleIcon](../../fontawesome-6/Brands/AccessibleIcon.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$AccessibleIconXs>`
- `<$AccessibleIconSm>`
- `<$AccessibleIconMd>`
- `<$AccessibleIconLg>`





## AccessibleIcon

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element AccessibleIcon
include('fontawesome-6/Brands/AccessibleIcon')

' renders the element
AccessibleIcon('AccessibleIcon', 'Accessible Icon', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element AccessibleIcon
include('fontawesome-6/Brands/AccessibleIcon')

' renders the element
AccessibleIcon('AccessibleIcon', 'Accessible Icon', 'an optional tech label', 'an optional description')
@enduml
```

