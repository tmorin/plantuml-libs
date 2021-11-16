# Autoprefixer


```text
simpleicons-5/A/Autoprefixer
```

```text
include('simpleicons-5/A/Autoprefixer')
```



| Illustration | Autoprefixer |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/A/Autoprefixer.png) | ![illustration for Autoprefixer](../../simpleicons-5/A/Autoprefixer.Local.png) |




## Autoprefixer

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Autoprefixer
include('simpleicons-5/A/Autoprefixer')

' renders the element
Autoprefixer('Autoprefixer', 'Autoprefixer', 'an optional tech label')
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
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Autoprefixer
include('simpleicons-5/A/Autoprefixer')

' renders the element
Autoprefixer('Autoprefixer', 'Autoprefixer', 'an optional tech label')
@enduml
```

