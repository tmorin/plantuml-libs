# Apachehadoop


```text
simpleicons/A/Apachehadoop
```

```text
include('simpleicons/A/Apachehadoop')
```



| Illustration | Apachehadoop |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/A/Apachehadoop.png) | ![illustration for Apachehadoop](../../simpleicons/A/Apachehadoop.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ApachehadoopXs>`
- `<$ApachehadoopSm>`
- `<$ApachehadoopMd>`
- `<$ApachehadoopLg>`





## Apachehadoop

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Apachehadoop
include('simpleicons/A/Apachehadoop')

' renders the element
Apachehadoop('Apachehadoop', 'Apachehadoop', 'an optional tech label', 'an optional description')
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
include('simpleicons/bootstrap')

' loads the Item which embeds the element Apachehadoop
include('simpleicons/A/Apachehadoop')

' renders the element
Apachehadoop('Apachehadoop', 'Apachehadoop', 'an optional tech label', 'an optional description')
@enduml
```

