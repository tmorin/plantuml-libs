# Khanacademy


```text
simpleicons-6/K/Khanacademy
```

```text
include('simpleicons-6/K/Khanacademy')
```



| Illustration | Khanacademy |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/K/Khanacademy.png) | ![illustration for Khanacademy](../../simpleicons-6/K/Khanacademy.Local.png) |




## Khanacademy

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Khanacademy
include('simpleicons-6/K/Khanacademy')

' renders the element
Khanacademy('Khanacademy', 'Khanacademy', 'an optional tech label')
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
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Khanacademy
include('simpleicons-6/K/Khanacademy')

' renders the element
Khanacademy('Khanacademy', 'Khanacademy', 'an optional tech label')
@enduml
```

