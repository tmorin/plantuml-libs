# Softpedia


```text
simpleicons/S/Softpedia
```

```text
include('simpleicons/S/Softpedia')
```



| Illustration | Softpedia |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/S/Softpedia.png) | ![illustration for Softpedia](../../simpleicons/S/Softpedia.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$SoftpediaXs>`
- `<$SoftpediaSm>`
- `<$SoftpediaMd>`
- `<$SoftpediaLg>`





## Softpedia

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Softpedia
include('simpleicons/S/Softpedia')

' renders the element
Softpedia('Softpedia', 'Softpedia', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Softpedia
include('simpleicons/S/Softpedia')

' renders the element
Softpedia('Softpedia', 'Softpedia', 'an optional tech label', 'an optional description')
@enduml
```

