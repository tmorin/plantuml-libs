# Concourse


```text
simpleicons-14/C/Concourse
```

```text
include('simpleicons-14/C/Concourse')
```



| Illustration | Concourse |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/C/Concourse.png) | ![illustration for Concourse](../../simpleicons-14/C/Concourse.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ConcourseXs>`
- `<$ConcourseSm>`
- `<$ConcourseMd>`
- `<$ConcourseLg>`





## Concourse

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Concourse
include('simpleicons-14/C/Concourse')

' renders the element
Concourse('Concourse', 'Concourse', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Concourse
include('simpleicons-14/C/Concourse')

' renders the element
Concourse('Concourse', 'Concourse', 'an optional tech label', 'an optional description')
@enduml
```

