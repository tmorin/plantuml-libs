# Jenkinsx


```text
simpleicons-14/J/Jenkinsx
```

```text
include('simpleicons-14/J/Jenkinsx')
```



| Illustration | Jenkinsx |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/J/Jenkinsx.png) | ![illustration for Jenkinsx](../../simpleicons-14/J/Jenkinsx.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$JenkinsxXs>`
- `<$JenkinsxSm>`
- `<$JenkinsxMd>`
- `<$JenkinsxLg>`





## Jenkinsx

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Jenkinsx
include('simpleicons-14/J/Jenkinsx')

' renders the element
Jenkinsx('Jenkinsx', 'Jenkinsx', 'an optional tech label', 'an optional description')
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
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Jenkinsx
include('simpleicons-14/J/Jenkinsx')

' renders the element
Jenkinsx('Jenkinsx', 'Jenkinsx', 'an optional tech label', 'an optional description')
@enduml
```

