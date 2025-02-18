# Jenkins


```text
simpleicons-14/J/Jenkins
```

```text
include('simpleicons-14/J/Jenkins')
```



| Illustration | Jenkins |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/J/Jenkins.png) | ![illustration for Jenkins](../../simpleicons-14/J/Jenkins.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$JenkinsXs>`
- `<$JenkinsSm>`
- `<$JenkinsMd>`
- `<$JenkinsLg>`





## Jenkins

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Jenkins
include('simpleicons-14/J/Jenkins')

' renders the element
Jenkins('Jenkins', 'Jenkins', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Jenkins
include('simpleicons-14/J/Jenkins')

' renders the element
Jenkins('Jenkins', 'Jenkins', 'an optional tech label', 'an optional description')
@enduml
```

