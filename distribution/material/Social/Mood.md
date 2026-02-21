# Mood


```text
material/Social/Mood
```

```text
include('material/Social/Mood')
```



| Illustration | Mood |
| :---: | :---: |
| ![illustration for Illustration](../../material/Social/Mood.png) | ![illustration for Mood](../../material/Social/Mood.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$MoodXs>`
- `<$MoodSm>`
- `<$MoodMd>`
- `<$MoodLg>`





## Mood

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element Mood
include('material/Social/Mood')

' renders the element
Mood('Mood', 'Mood', 'an optional tech label', 'an optional description')
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
include('material/bootstrap')

' loads the Item which embeds the element Mood
include('material/Social/Mood')

' renders the element
Mood('Mood', 'Mood', 'an optional tech label', 'an optional description')
@enduml
```

