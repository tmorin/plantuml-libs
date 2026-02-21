# Fizz


```text
simpleicons/F/Fizz
```

```text
include('simpleicons/F/Fizz')
```



| Illustration | Fizz |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/F/Fizz.png) | ![illustration for Fizz](../../simpleicons/F/Fizz.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$FizzXs>`
- `<$FizzSm>`
- `<$FizzMd>`
- `<$FizzLg>`





## Fizz

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Fizz
include('simpleicons/F/Fizz')

' renders the element
Fizz('Fizz', 'Fizz', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Fizz
include('simpleicons/F/Fizz')

' renders the element
Fizz('Fizz', 'Fizz', 'an optional tech label', 'an optional description')
@enduml
```

