# Apachekylin


```text
simpleicons-8/A/Apachekylin
```

```text
include('simpleicons-8/A/Apachekylin')
```



| Illustration | Apachekylin |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/A/Apachekylin.png) | ![illustration for Apachekylin](../../simpleicons-8/A/Apachekylin.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ApachekylinXs>`
- `<$ApachekylinSm>`
- `<$ApachekylinMd>`
- `<$ApachekylinLg>`





## Apachekylin

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Apachekylin
include('simpleicons-8/A/Apachekylin')

' renders the element
Apachekylin('Apachekylin', 'Apachekylin', 'an optional tech label', 'an optional description')
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
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Apachekylin
include('simpleicons-8/A/Apachekylin')

' renders the element
Apachekylin('Apachekylin', 'Apachekylin', 'an optional tech label', 'an optional description')
@enduml
```

