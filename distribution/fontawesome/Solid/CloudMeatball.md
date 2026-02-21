# CloudMeatball


```text
fontawesome/Solid/CloudMeatball
```

```text
include('fontawesome/Solid/CloudMeatball')
```



| Illustration | CloudMeatball |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/CloudMeatball.png) | ![illustration for CloudMeatball](../../fontawesome/Solid/CloudMeatball.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$CloudMeatballXs>`
- `<$CloudMeatballSm>`
- `<$CloudMeatballMd>`
- `<$CloudMeatballLg>`





## CloudMeatball

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element CloudMeatball
include('fontawesome/Solid/CloudMeatball')

' renders the element
CloudMeatball('CloudMeatball', 'Cloud Meatball', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element CloudMeatball
include('fontawesome/Solid/CloudMeatball')

' renders the element
CloudMeatball('CloudMeatball', 'Cloud Meatball', 'an optional tech label', 'an optional description')
@enduml
```

