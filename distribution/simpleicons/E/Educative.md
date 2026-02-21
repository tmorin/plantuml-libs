# Educative


```text
simpleicons/E/Educative
```

```text
include('simpleicons/E/Educative')
```



| Illustration | Educative |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/E/Educative.png) | ![illustration for Educative](../../simpleicons/E/Educative.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$EducativeXs>`
- `<$EducativeSm>`
- `<$EducativeMd>`
- `<$EducativeLg>`





## Educative

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Educative
include('simpleicons/E/Educative')

' renders the element
Educative('Educative', 'Educative', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Educative
include('simpleicons/E/Educative')

' renders the element
Educative('Educative', 'Educative', 'an optional tech label', 'an optional description')
@enduml
```

