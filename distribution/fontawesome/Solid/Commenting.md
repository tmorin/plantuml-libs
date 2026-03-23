# Commenting


```text
fontawesome/Solid/Commenting
```

```text
include('fontawesome/Solid/Commenting')
```



| Illustration | Commenting |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/Commenting.png) | ![illustration for Commenting](../../fontawesome/Solid/Commenting.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$CommentingXs>`
- `<$CommentingSm>`
- `<$CommentingMd>`
- `<$CommentingLg>`





## Commenting

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Commenting
include('fontawesome/Solid/Commenting')

' renders the element
Commenting('Commenting', 'Commenting', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Commenting
include('fontawesome/Solid/Commenting')

' renders the element
Commenting('Commenting', 'Commenting', 'an optional tech label', 'an optional description')
@enduml
```

