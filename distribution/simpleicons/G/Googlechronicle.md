# Googlechronicle


```text
simpleicons/G/Googlechronicle
```

```text
include('simpleicons/G/Googlechronicle')
```



| Illustration | Googlechronicle |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/G/Googlechronicle.png) | ![illustration for Googlechronicle](../../simpleicons/G/Googlechronicle.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$GooglechronicleXs>`
- `<$GooglechronicleSm>`
- `<$GooglechronicleMd>`
- `<$GooglechronicleLg>`





## Googlechronicle

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Googlechronicle
include('simpleicons/G/Googlechronicle')

' renders the element
Googlechronicle('Googlechronicle', 'Googlechronicle', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Googlechronicle
include('simpleicons/G/Googlechronicle')

' renders the element
Googlechronicle('Googlechronicle', 'Googlechronicle', 'an optional tech label', 'an optional description')
@enduml
```

