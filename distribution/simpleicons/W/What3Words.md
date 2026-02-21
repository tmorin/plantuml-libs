# What3Words


```text
simpleicons/W/What3Words
```

```text
include('simpleicons/W/What3Words')
```



| Illustration | What3Words |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/W/What3Words.png) | ![illustration for What3Words](../../simpleicons/W/What3Words.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$What3WordsXs>`
- `<$What3WordsSm>`
- `<$What3WordsMd>`
- `<$What3WordsLg>`





## What3Words

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element What3Words
include('simpleicons/W/What3Words')

' renders the element
What3Words('What3Words', 'What3 Words', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element What3Words
include('simpleicons/W/What3Words')

' renders the element
What3Words('What3Words', 'What3 Words', 'an optional tech label', 'an optional description')
@enduml
```

