# Gitkraken


```text
fontawesome-5/Brands/Gitkraken
```

```text
include('fontawesome-5/Brands/Gitkraken')
```



| Illustration | Gitkraken |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Brands/Gitkraken.png) | ![illustration for Gitkraken](../../fontawesome-5/Brands/Gitkraken.Local.png) |




## Gitkraken

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Gitkraken
include('fontawesome-5/Brands/Gitkraken')

' renders the element
Gitkraken('Gitkraken', 'Gitkraken', 'an optional tech label')
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

' loads the Item which embeds the element Gitkraken
include('fontawesome-5/Brands/Gitkraken')

' renders the element
Gitkraken('Gitkraken', 'Gitkraken', 'an optional tech label')
@enduml
```

