# SquareFacebook


```text
fontawesome-6/Brands/SquareFacebook
```

```text
include('fontawesome-6/Brands/SquareFacebook')
```



| Illustration | SquareFacebook |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Brands/SquareFacebook.png) | ![illustration for SquareFacebook](../../fontawesome-6/Brands/SquareFacebook.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$SquareFacebookXs>`
- `<$SquareFacebookSm>`
- `<$SquareFacebookMd>`
- `<$SquareFacebookLg>`





## SquareFacebook

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element SquareFacebook
include('fontawesome-6/Brands/SquareFacebook')

' renders the element
SquareFacebook('SquareFacebook', 'Square Facebook', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element SquareFacebook
include('fontawesome-6/Brands/SquareFacebook')

' renders the element
SquareFacebook('SquareFacebook', 'Square Facebook', 'an optional tech label', 'an optional description')
@enduml
```

