# Greasyfork


```text
simpleicons-14/G/Greasyfork
```

```text
include('simpleicons-14/G/Greasyfork')
```



| Illustration | Greasyfork |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/G/Greasyfork.png) | ![illustration for Greasyfork](../../simpleicons-14/G/Greasyfork.Local.png) |



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
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Greasyfork
include('simpleicons-14/G/Greasyfork')

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
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Greasyfork
include('simpleicons-14/G/Greasyfork')

' renders the element
Greasyfork('Greasyfork', 'Greasyfork', 'an optional tech label', 'an optional description')
@enduml
```

