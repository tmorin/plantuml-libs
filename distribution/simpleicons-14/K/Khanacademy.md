# Khanacademy


```text
simpleicons-14/K/Khanacademy
```

```text
include('simpleicons-14/K/Khanacademy')
```



| Illustration | Khanacademy |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/K/Khanacademy.png) | ![illustration for Khanacademy](../../simpleicons-14/K/Khanacademy.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$KhanacademyXs>`
- `<$KhanacademySm>`
- `<$KhanacademyMd>`
- `<$KhanacademyLg>`





## Khanacademy

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Khanacademy
include('simpleicons-14/K/Khanacademy')

' renders the element
Khanacademy('Khanacademy', 'Khanacademy', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Khanacademy
include('simpleicons-14/K/Khanacademy')

' renders the element
Khanacademy('Khanacademy', 'Khanacademy', 'an optional tech label', 'an optional description')
@enduml
```

