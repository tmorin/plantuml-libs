# Googlechrome


```text
simpleicons/G/Googlechrome
```

```text
include('simpleicons/G/Googlechrome')
```



| Illustration | Googlechrome |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/G/Googlechrome.png) | ![illustration for Googlechrome](../../simpleicons/G/Googlechrome.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$GooglechromeXs>`
- `<$GooglechromeSm>`
- `<$GooglechromeMd>`
- `<$GooglechromeLg>`





## Googlechrome

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Googlechrome
include('simpleicons/G/Googlechrome')

' renders the element
Googlechrome('Googlechrome', 'Googlechrome', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Googlechrome
include('simpleicons/G/Googlechrome')

' renders the element
Googlechrome('Googlechrome', 'Googlechrome', 'an optional tech label', 'an optional description')
@enduml
```

