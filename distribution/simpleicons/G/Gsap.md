# Gsap


```text
simpleicons/G/Gsap
```

```text
include('simpleicons/G/Gsap')
```



| Illustration | Gsap |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/G/Gsap.png) | ![illustration for Gsap](../../simpleicons/G/Gsap.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$GsapXs>`
- `<$GsapSm>`
- `<$GsapMd>`
- `<$GsapLg>`





## Gsap

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Gsap
include('simpleicons/G/Gsap')

' renders the element
Gsap('Gsap', 'Gsap', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Gsap
include('simpleicons/G/Gsap')

' renders the element
Gsap('Gsap', 'Gsap', 'an optional tech label', 'an optional description')
@enduml
```

