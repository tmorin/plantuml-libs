# Greasyfork


```text
simpleicons/G/Greasyfork
```

```text
include('simpleicons/G/Greasyfork')
```



| Illustration | Greasyfork |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/G/Greasyfork.png) | ![illustration for Greasyfork](../../simpleicons/G/Greasyfork.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$GreasyforkXs>`
- `<$GreasyforkSm>`
- `<$GreasyforkMd>`
- `<$GreasyforkLg>`





## Greasyfork

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Greasyfork
include('simpleicons/G/Greasyfork')

' renders the element
Greasyfork('Greasyfork', 'Greasyfork', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Greasyfork
include('simpleicons/G/Greasyfork')

' renders the element
Greasyfork('Greasyfork', 'Greasyfork', 'an optional tech label', 'an optional description')
@enduml
```

